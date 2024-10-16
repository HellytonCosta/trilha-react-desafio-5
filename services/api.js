import axios from 'axios';

// const SUPABASE_URL = "https://divgnhnpsvbfsepmmqph.supabase.co/rest/v1/"
// const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

export const api  = axios.create({
    baseURL: 'https://divgnhnpsvbfsepmmqph.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpdmduaG5wc3ZiZnNlcG1tcXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczMjA1NjksImV4cCI6MjA0Mjg5NjU2OX0.LY2RsTeR0UvqT3da5nzDTZPYPC-ygF67PBK-PMllo7U",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpdmduaG5wc3ZiZnNlcG1tcXBoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzMyMDU2OSwiZXhwIjoyMDQyODk2NTY5fQ.yo3E777exj_8VWfFCHGBHDQVcfk_HxT9sWYNniTxVzg"
    }
})