import Title from "./components/atoms/title";
import FeatureHome from "./components/organisms/feature-home";
import SliderMain from "./components/organisms/Slider";
import Footer from "./components/template/footer";
import Header from "./components/template/Header";
import TabCategoryHome from "./components/template/tab-category-home";

export default function Home() {
  return (
    <main>
      <Header/>
      <SliderMain/>
      <FeatureHome/>
      <div className="!mt-20 max-w-[1160px] m-auto px-3">
        <Title className={`max-[940px]:hidden`}>دسته بندی دوره ها</Title>
        <TabCategoryHome/>
      </div>
      <Footer/>
    </main>
  );
}
