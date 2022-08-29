const SUPABASE_URL = 'https://xnwqsbmekrohmjrqulao.supabase.co';

const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhud3FzYm1la3JvaG1qcnF1bGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2MzkyNTgsImV4cCI6MTk3NTIxNTI1OH0.A9jwVzQJOXoOYRe3CtCtSj6B30yywT0bXU8EkVXZq4k';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(poll) {
    // create a single new game in the games table using the above object
    const response = await client.from('polls').insert(poll);
    return checkError(response);
}

export async function getPolls() {
    // select all games from the games table
    const response = await client.from('polls').select('*');
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
