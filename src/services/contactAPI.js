import { default as axios } from "axios"

const baseURL = 'https://6486c61fbeba6297278f233c.mockapi.io/v1/'
const contactbookAPI = axios.create({baseURL});

export const fetchContacts = async () => {
    const {data} = await contactbookAPI.get('contacts');
    console.log('axios:',data);
    return data;
}

export const addContact = async (contact) => {
    const {data} = await contactbookAPI.post('contacts', contact)
    console.log(data);
    return data;
}

export const deleteContact = async (id) => {
    const {data} = await contactbookAPI.delete(`contacts/${id}`);
    console.log(data);
    return data;
}

