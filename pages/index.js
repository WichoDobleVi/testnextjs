
export default function Home(props) {

    return (
        <div>
            <h2>Home</h2>
            <style jsx>
                { `
                    h2 {
                        color: red;
                    }
                 
                 `
                }
            </style>
        </div>
    )
}

/* export async function getServerSideProps(context) {
    console.log(context);
    const {mac, apmac} = context.query
    const apmac_ = apmac.replace(/:/g, '');
    const res = await fetch(`https://sharedfi-prod.uc.r.appspot.com/aps?apMac=${apmac_}`);
    const aps = await res.json();
    return {
        props: {
            aps
        }
    }
} */