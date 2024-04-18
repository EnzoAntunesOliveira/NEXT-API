import { Client } from "./interface"

const clients: Client[] = [
    {
        name: 'Tom Smith',
        address: '123 Main St'
    },
    {
        name: 'Jane Doe',
        address: '456 Elm St'
    },
    {
        name: 'John Smith',
        address: '789 Oak St'
    }
]

export function GET() {
    return Response.json({clients})
}

export async function POST(request: Request) {
    const form = await request.formData();
    const name = form.get('name') as string;
    const address = form.get('address') as string;

    clients.push({
        name, 
        address
    });

   return Response.json({status: "Added"});
}