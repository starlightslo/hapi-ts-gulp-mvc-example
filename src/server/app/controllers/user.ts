/// <reference path="../../../../typings/tsd.d.ts" />

const UserData = [{
	id: 1,
	name: 'Tony',
	gender: 'M',
	birthDate: '1986/01/09'
},{
	id: 2,
	name: 'Ivan',
	gender: 'M',
	birthDate: '1996/12/21'
},{
	id: 3,
	name: 'Pia',
	gender: 'F',
	birthDate: '2000/05/01'
},{
	id: 4,
	name: 'Jimmy',
	gender: 'M',
	birthDate: '1983/03/19'
}];

exports.getUsers = (request, reply) => {
	reply(UserData);
};

exports.getUser = (request, reply) => {
	const id = request.params.id;
	const user = UserData.filter(data => {
		return data.id == id
	});
	reply(user[0]);
};
