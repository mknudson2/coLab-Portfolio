function InfiniteScroll() {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller_inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner?.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <>
      <div className="scroller">
        <ul className="scroll-list scroller_inner">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Bootstrap</li>
          <li>Git</li>
        </ul>
      </div>
      

      <div className="scroller">
        <ul className="scroll-list scroller_inner">
          <li>
            <img className="school-img" src="public/BYU_Cougars_logo.svg" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/Aberdeen.svg" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/wisconsin.svg" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/Yale.svg" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/stOlaf.jpeg" alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default InfiniteScroll;
