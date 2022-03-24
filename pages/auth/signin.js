import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import Image from "next/image";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen mt-28 items-center">
          <Image 
          src="https://links.papareact.com/ocw"
          alt="INSTAGRAM"
          height={200}
          width={300}
          className="object-contain"
          />
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})} className="border py-2 px-10 rounded-md bg-blue-400 text-white hover:bg-blue-500 cursor-pointer">
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
