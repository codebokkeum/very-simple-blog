"use client";

import useTheme from "@/hooks/useTheme";
import Giscus from "@giscus/react";

const Comments = () => {
  const { theme } = useTheme();

  return (
    // https://giscus.app/ko 를 확인해 주세요
    <Giscus
      repo="codebokkeum/very-simple-blog"
      repoId="R_kgDOOmk9Xg"
      category="Announcements"
      categoryId="DIC_kwDOOmk9Xs4Cp6PY"
      id="comments"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="ko"
      loading="eager"
      theme={theme}
    />
  );
};

export default Comments;