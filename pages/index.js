import Script from 'next/script'
import Head from 'next/head'
import Intro from '../components/Intro'
import Main from '../components/Main'

export default function Home() {
  return (
    <div >
      <Head>
        <title>AlphaGrip</title>
        <meta name="description" content="AlphaGrip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />

      <Intro />
      <div id="fb-root"></div>
    <div id="fb-customer-chat" className="fb-customerchat"></div>

    <Script strategy="lazyOnload"
     dangerouslySetInnerHTML={{
      __html: `
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "106726951775061");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        })
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`}}
    />
    </div>
  )
}
