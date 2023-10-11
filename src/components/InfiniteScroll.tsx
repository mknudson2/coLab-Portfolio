function InfiniteScroll() {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller_inner");

      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerInner?.appendChild(duplicatedItem);
        });
      }
    });
  }

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
