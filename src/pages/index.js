import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"




class IndexPage extends React.Component {

  

  render() {
    console.log("rendering...");
    return(


        <Layout >
        <title>bigGrow</title>
          <Seo title="Biggrow Web Solutions" description="Web Development Design and Solutions"/>
      
        <Layout/>

      );
    }


}



export default IndexPage
