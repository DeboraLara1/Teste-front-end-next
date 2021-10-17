/* eslint-disable import/no-anonymous-default-export */
const URL = 'https://60831bd35dbd2c001757b2c7.mockapi.io/api/users';

const  getList = async () => {
    const profiles = await fetch(URL).then((resp) => resp.json());
    return profiles;
};

const  getListById = async (id) => {
    const profiles = await fetch(`${URL}/${id}`).then((resp) => resp.json());
    return profiles;
};

const  deleteListById = async (id) => {
    const deleteItem = await fetch(`${URL}/${id}`, { method: 'DELETE' }).then((resp) => resp.json())
    return deleteItem;
};

export default {getList, getListById, deleteListById}

