import { lazy, Suspense } from "react";
import { Discount } from "../../components/discount";
import { Examples } from "../../components/examples";
import { MainForm } from "../../components/form";
import { Title } from "../../components/title";
import { Packages } from "../../components/packages";
import { Questions } from "../../components/questions";

const Comments = lazy(() => import("../../components/comments"));

export const Home = () => {
  return (
    <div>
      <MainForm />
      <div className="relative z-10">
        <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[85%] xl:max-w-[75%] m-auto">
          <Title />
        </div>
        <Discount />
        <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[85%] xl:max-w-[75%] m-auto">
          <Examples />
        </div>
        <Suspense fallback={<div className="h-[400px]" />}>
          <Comments />
        </Suspense>
        <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[85%] xl:max-w-[75%] m-auto">
          <Packages />
          <Questions />
        </div>
      </div>
    </div>
  );
};
