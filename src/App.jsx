import Card from "./components/Card";

export default function App() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4 items-start">
      <Card
        imgSrc="https://i.pinimg.com/736x/dc/01/0c/dc010c402043969cf2df3b64d8003efe.jpg"
        title="Secret Door"
        author="Arctic Monkeys"
        desc="“Secret Door” explores a mysterious and intimate moment between two people, blending romantic feelings with a dreamlike sense of escape. Its atmospheric sound and reflective lyrics create a feeling of being drawn into a private world away from everything else."
      />

      <Card
        imgSrc="https://i.pinimg.com/736x/e3/72/98/e37298fa5dc832c8b3cadef017fea4d3.jpg"
        title="About You"
        author="The 1975"
        desc="“About You” reflects on the memories of a past relationship and the difficulty of forgetting someone who once meant so much. Its nostalgic atmosphere captures the feeling of still thinking about a person even after the relationship has ended."
      />

      <Card
        imgSrc="https://i.pinimg.com/736x/e5/03/ef/e503ef3432e66acf78ac674bc458b94f.jpg"
        title="Merry Christmas, Please Don't Call"
        author="Bleachers"
        desc="“Merry Christmas, Please Don't Call” presents the complicated emotions of dealing with a painful past relationship during the holiday season. Instead of celebrating together, the song focuses on creating distance and refusing to reopen old wounds."
      />

      <Card
        imgSrc="https://i.pinimg.com/1200x/f5/6a/d0/f56ad00ea3de96ea0905db817ac9434c.jpg"
        title="Let Down"
        author="Radiohead"
        desc="“Let Down” captures feelings of alienation, disappointment, and emotional distance in modern life. The song portrays a sense of being surrounded by people and movement while still feeling disconnected, powerless, and unable to control where life is heading."
      />

      <Card
        imgSrc="https://i.pinimg.com/1200x/ae/c4/a1/aec4a15725442ea05e6e2e26a5fc4829.jpg"
        title="2112"
        author="Reality Club"
        desc="“2112” reflects on a relationship that has changed over time, focusing on memories, separation, and the difficulty of accepting that two people may no longer be meant to stay together. The song carries a nostalgic and bittersweet feeling as the past continues to linger."
      />
    </main>
  );
}
