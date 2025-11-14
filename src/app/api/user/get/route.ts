import User from '../../../../lib/models/user.model';
import { connect } from '../../../../lib/mongodb/mongoose';
import { currentUser } from '@clerk/nextjs/server';

interface UsersPayload {
  startIndex?: string | number;
  limit?: string | number;
  sort?: 'asc' | 'desc' | string;
  [key: string]: any;
}

interface UserDoc {
  _id: any;
  createdAt: Date;
  [key: string]: any;
}

interface UsersResponse {
  users: UserDoc[];
  totalUsers: number;
  lastMonthUsers: number;
}

interface CurrentUser {
  publicMetadata?: {
    isAdmin?: boolean;
    [key: string]: any;
  };
  [key: string]: any;
}

export const POST = async (req: Request): Promise<Response> => {
  const user = (await currentUser()) as CurrentUser;

  try {
    await connect();
    const data = (await req.json()) as UsersPayload;

    if (!user.publicMetadata?.isAdmin) {
      return new Response('Unauthorized', { status: 401 });
    }

    const startIndex = parseInt(data.startIndex as unknown as string) || 0;
    const limit = parseInt(data.limit as unknown as string) || 9;
    const sortDirection = data.sort === 'asc' ? 1 : -1;
    const users = (await User.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit)) as UserDoc[];

    const totalUsers: number = await User.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers: number = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });
    return new Response(JSON.stringify({ users, totalUsers, lastMonthUsers } as UsersResponse), {
      status: 200,
    });
  } catch (error) {
    console.log('Error getting the users :', error);
    return new Response('Error getting the users', { status: 500 });
  }
};