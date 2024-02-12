'use client'

import { db } from "@/app/firebase";
import { Editor } from "@tinymce/tinymce-react";
import { ref, set } from "firebase/database";

export default function Post() {

    function publishBlog() {
        set(ref(db, 'articles'), {
            title: "Laravel 10 sockets app with Reverb",
            content: "Laravel Reverb is a new first-party WebSocket server for Laravel applications, bringing real-time communication between client and server."
        })
    }

    return (
        <>
            <div>
                <Editor
                    apiKey='y3xqzarnhohuq68bxaplhnrmw26mo0zwxr422zd1nb98jzlg'
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                    }}
                    initialValue="Welcome to TinyMCE!"
                />
                <button onClick={() => publishBlog()} className="bg-blue-600 px-4 py-2 rounded-lg">Publish</button>
            </div>
        </>
    )
}