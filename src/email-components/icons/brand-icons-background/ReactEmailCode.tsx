// import { Container } from "@react-email/container";
// import { Head } from "@react-email/head";
// import { Html } from "@react-email/html";
// import { Img } from "@react-email/img";
// import { Section } from "@react-email/section";
// import { Column } from "@react-email/column";
// import { Tailwind } from "@react-email/tailwind";
// import * as React from "react";

// export default function Email() {
//   return (
//     <Html>
//       <Head />
//       <Tailwind>
//         <Section className="bg-white mr-auto p-4">
//           <Container className="text-center m-auto">
//             <Section>
//               <Column className="w-[44px] h-[44px] rounded-full  text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/9gag.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/airbnb_1.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/angelist.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/badoo.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/behance.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/blogger.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/codepan.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/coderwall.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/devianart.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//             </Section>
//             <Section className="pt-5">
//               <Column className="w-[44px] h-[44px] rounded-full  text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/discord_5.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/dribbble.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/dropbox.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/envato.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/evernote.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/facebook_60.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/flick.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/foursquare.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/git_2.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//             </Section>
//             <Section className="pt-5">
//               <Column className="w-[44px] h-[44px] rounded-full  text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/github_10.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/goodreads.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/google_drive.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/google_play.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/houzz.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/instagram_13.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/kakao_talk.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/linkedin_9.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/medium.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//             </Section>
//             <Section className="pt-5">
//               <Column className="w-[44px] h-[44px] rounded-full  text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/meetup.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/messenger.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/patreon.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/printerest.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/product_hunt.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/quora.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/rss.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/skype_3.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/slack_1.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//             </Section>
//             <Section className="pt-5">
//               <Column className="w-[44px] h-[44px] rounded-full  text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/snapchat_1.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/soundcloud.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/spotify_1.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/steam_2.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/telegram.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/tiktok_5.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/tinder_1.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/trello.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/tumblr.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//             </Section>
//             <Section className="pt-5">
//               <Column className="w-[44px] h-[44px] rounded-full  text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/twitch.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/twitter_50.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/vimeo_3.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/whatsapp_8.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/wordpress_1.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/yahoo_3.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//               <Column className="w-[10px]" />
//               <Column className="w-[44px] h-[44px] rounded-full text-center align-middle border border-solid border-gray-300">
//                 <Img
//                   className="mx-auto inline-block"
//                   src="https://www.linkpicture.com/q/youtube_23.png"
//                   alt="icon"
//                   height="24"
//                 />
//               </Column>
//             </Section>
//           </Container>
//         </Section>
//       </Tailwind>
//     </Html>
//   );
// }

/** Module require at least one export or import */
export {}
