export interface Build {
    linkedinViews: number;
    mediumViews: number;
    youtubeViews: number;
    title: string;
    content: string;
    imageUrl: string;
    postUrl: string;
    date: string;
  }
  
  export const BUILDS: Build[] = [
    {
      linkedinViews: 4035,
      mediumViews: 501,
      youtubeViews: 0,
      title: "Disrupt",
      content: "A Free platform that centralizes",
      imageUrl: "assets/images/platform2.jpg",
      postUrl: "https://stories.schubergphilis.com/when-aws-practice-is-not-well-architected-the-war-will-be-lost-138ca273089c",
      date: "May 18, 2021"
    },
    {
      linkedinViews: 3194,
      mediumViews: 830,
      youtubeViews: 0,
      title: "Hexagonal Architectures",
      content: "For the past couple of months, I have been watching the AWS Control Tower space, and there have been some massive value-adds. So grab a coffee; as I go over my top list of AWS blogs, posts, and reference architectures to create that perfect day one setup.",
      imageUrl: "assets/images/controltower.png",
      postUrl: "https://stories.schubergphilis.com/turbo-charge-you-aws-control-tower-44fad7a62f50",
      date: "March 11, 2021"
    }
  ]