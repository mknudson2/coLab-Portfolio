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
      <div className="scroller" data-direction="right">
        <ul className="scroll-list scroller_inner">
          <li>
            <img src="public/html.png" alt="html5" />
          </li>
          <li>
            <img src="public/css.png" alt="css3" />
          </li>
          <li>
            <img src="public/git.png" alt="git" />
          </li>
          <li>
            <img src="public/python.png" alt="python" />
          </li>
          <li>
            <img src="public/js.png" alt="javascript" />
          </li>
          <li>
            <img src="public/ts.png" alt="typescript" />
          </li>
          <li>
            <img src="public/flask.png" alt="flask" />
          </li>
          <li>
            <img src="public/postgresql.png" alt="postgresql" />
          </li>
          <li>
            <img src="public/nodejs.png" alt="node.js" />
          </li>
          <li>
            <img src="public/react.png" alt="react" />
          </li>
          <li>
            <img src="public/bootstrap.png" alt="bootstrap 5" />
          </li>
        </ul>
      </div>

      <div className="scroller">
        <ul className="scroll-list scroller_inner">
          <li>
            <img className="school-img" src="public/4.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/1.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/3.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/5.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/2.png" alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default InfiniteScroll;
