import { useEffect, useState } from "react";

function InfiniteScroll() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
  scrollers.forEach((scroller) => {
    const scrollerInner = scroller.querySelector(".scroller_inner");
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);

      // Calculate the total width of all items
      const totalWidth = scrollerContent.reduce((acc, item) => {
        return acc + item.clientWidth;
      }, 0);

      // Duplicate items to fill the screen
      let currentWidth = 0;
      while (currentWidth < scroller.clientWidth) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerInner?.appendChild(duplicatedItem);
          currentWidth += item.clientWidth;
        });
      }
    }
    scroller.setAttribute("data-animated", "true");
  });
}

    // Clean up function to stop the animation when the component unmounts
    return () => setAnimate(false);
  }, [animate]);

  return (
    <>
      <div className="scroller" data-direction="right">
        <ul className="scroll-list scroller_inner">
          <li>
            <img src="/html.png" alt="html5" />
          </li>
          <li>
            <img src="/css.png" alt="css3" />
          </li>
          <li>
            <img src="/git.png" alt="git" />
          </li>
          <li>
            <img src="/python.png" alt="python" />
          </li>
          <li>
            <img src="/js.png" alt="javascript" />
          </li>
          <li>
            <img src="/ts.png" alt="typescript" />
          </li>
          <li>
            <img src="/flask.png" alt="flask" />
          </li>
          <li>
            <img src="/postgresql.png" alt="postgresql" />
          </li>
          <li>
            <img src="/nodejs.png" alt="node.js" />
          </li>
          <li>
            <img src="/react.png" alt="react" />
          </li>
          <li>
            <img src="/bootstrap.png" alt="bootstrap 5" />
          </li>
        </ul>
      </div>

      <div className="scroller">
        <ul className="scroll-list scroller_inner">
          <li>
            <img className="school-img" src="/4.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="/1.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="/3.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="/5.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="/2.png" alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default InfiniteScroll;
