
export default function Home({ap}) {
    
    const passPortal = async () => {
        let redirecturl = "https://www.google.com/";
     
        var form = document.createElement("form");
        form.setAttribute("name", "weblogin_form");
        form.setAttribute("action", "https://securelogin.hpe.com/cgi-bin/login");
        form.setAttribute("method", "POST");
    
        var hiddenField2 = document.createElement("input");
        hiddenField2.setAttribute("type", "hidden");
        hiddenField2.setAttribute("name", "cmd");
        hiddenField2.setAttribute("value", "authenticate");
        form.appendChild(hiddenField2);
    
        var hiddenField3 = document.createElement("input");
        hiddenField3.setAttribute("type", "hidden");
        hiddenField3.setAttribute("name", "user");
        hiddenField3.setAttribute("value", "soriana");
        form.appendChild(hiddenField3);
    
        var hiddenField4 = document.createElement("input");
        hiddenField4.setAttribute("type", "hidden");
        hiddenField4.setAttribute("name", "password");
        hiddenField4.setAttribute("value", "123456789");
        form.appendChild(hiddenField4);
        // redirect url
        var hiddenField5 = document.createElement("input");
        hiddenField5.setAttribute("type", "hidden");
        hiddenField5.setAttribute("name", "url");
        hiddenField5.setAttribute("value", redirecturl);
        
        form.appendChild(hiddenField5);
        document.body.appendChild(form);
        form.submit();
    }
    
    return (
        <div>
            <h2>{ap ? ap.ap_locationname : "URL not found"}</h2>
            <button type="button" onClick={()=> passPortal()}>Acceder</button>
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

export async function getServerSideProps(context) {
    console.log(context);
    const {mac, apmac} = context.query
    let aps;

    if(apmac ) {
        const apmac_ = apmac.replace(/:/g, '');
        const res = await fetch(`https://sharedfi-prod.uc.r.appspot.com/aps?apMac=${apmac_}`);
        aps = await res.json();
    }
    return {
        props: {
            ap: aps
            
    }
    }
}