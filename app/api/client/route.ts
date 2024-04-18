
import { Client } from './interface';
 
const clients: Client [] = [
    {
        name: 'João Paulo',
        address: 'Rua 1'
    },
    {
        name: 'Maria da Silva',
        address: 'Rua 2'
    },
    {
        name: 'José Pereira',
        address: 'Rua 3'
    }
];
 
export function GET () {
    return Response.json(clients);
}
 
export async function POST(request: Request) {
    const form = await request.formData();
    const name = form.get('name') as string;
    const address = form.get('address') as string;
 
    clients.push({ name, address });
    
    return Response.json({
        status: 'added',
    });
}