export interface NFTItem {
	name: string;
	image: string;
	user: string;
	avatar: string;
	current: string;
	ends: string;
};

export interface NFT {
	name: string;
	nft: string;
	users: User[];
	outOf: string;
	timeLeft: string;
	price: string;
}

export interface User {
	avatar: string;
	username: string;
}

export interface Collection {
	name: string;
	avatar: string;
	marketCap: string;
	rate: string;
	verified: boolean;
	raise: boolean;
}