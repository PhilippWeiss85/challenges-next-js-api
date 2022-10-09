import {getAllUsers, createUser} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = await getAllUsers();
    return response.status(200).json(data);
  } else if (request.method === 'POST') {
    const newData = JSON.parse(request.body);
    const newProduct = await createUser(
      newData.name,
      newData.gender,
      newData.email,
    );
    console.log(newProduct);
    return response.status(201).json(newProduct);

    res.status(403).json({message: 'Error: request method not allowed.'});
  }
}
