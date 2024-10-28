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
	followers: any[];
	following: Following[];
};

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
