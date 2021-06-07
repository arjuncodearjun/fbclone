
import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

// This is just like App.js as we do in pure react
export default function Home({ session, posts }) {
  
  if(!session) return <Login/>;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header/>
      <main className="flex">
      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed posts={posts}/>

      {/* Widgets */}

      <Widgets/>
      </main>

    </div>
  );
}


// server side rendering/ checking for user authentication
export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: { session, posts: docs },
  };
}