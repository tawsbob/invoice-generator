import Head from 'next/head';

function Page({ title, children }){
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head> 
            { children }
        </>
    )
}

export default Page