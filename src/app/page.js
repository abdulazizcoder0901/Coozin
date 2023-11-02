import Events from "@/component/events/Events";
import Form from "@/component/form/Form";
import Header from "@/component/header/Header";
import Reason from "@/component/reason/Reason";
import Sellers from "@/component/sellers/Sellers";

export default function Home() {
  return (
    <>
      {/* Header Section */}
        <Header/>
      {/* Header Section */}

      {/* Reason Section */}
      <Reason/>
      {/* Reason Section */}

      {/* Form Section */}
      <Form/>
      {/* Form Section */}

       {/* Events Section */}
       <Events/>
      {/* Events Section */}

      {/* Sellers Section */}
      <Sellers/>
      {/* Sellers Section */}
    </>
  )
}
