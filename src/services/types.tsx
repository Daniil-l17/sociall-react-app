export type AuthDto = {
	email: string;
	name?: string;
	password: string;
};

export type User = {
	id: string;
	email: string;
	password: string;
	name: string;
	avatarUrl: string;
	dateOfBirth: any;
	createdAt: string;
	updatedAt: string;
	bio: any;
	location: any;
	followers: Follower[];
	following: Following[];
};

export interface Follower {
	id: string;
	followerId: string;
	followingId: string;
	follower: Follower2;
}

export interface Follower2 {
	id: string;
	email: string;
	password: string;
	name: string;
	avatarUrl: string;
	dateOfBirth: any;
	createdAt: string;
	updatedAt: string;
	bio: any;
	location: any;
}

export interface Following {
	id: string;
	followerId: string;
	followingId: string;
	following: Following2;
}

export interface Following2 {
	id: string;
	email: string;
	password: string;
	name: string;
	avatarUrl: string;
	dateOfBirth: string;
	createdAt: string;
	updatedAt: string;
	bio: string;
	location: string;
}
