"use client";

import { useRouter } from "next/navigation";

export default function ClinetPage() {
  const router = useRouter();

  async function write(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const title = form._title.value;
    const content = form.content.value;
    const published = form.published.checked;
    const listed = form.listed.checked;

    if (title.trim().length === 0) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (content.trim().length === 0) {
      alert("내용을 입력해주세요.");
      return;
    }
  }

  return (
    <>
      <h1>글 작성 페이지</h1>
      <hr />
      <form onSubmit={write} className="flex flex-col w-1/4 gap-3">
        <div className="flex gap-3">
          <label>공개 여부 : </label>
          <input type="checkbox" name="published" />
        </div>
        <div className="flex gap-3">
          <label>검색 여부 : </label>
          <input type="checkbox" name="listed" />
        </div>
        <input
          type="text"
          name="_title"
          placeholder="제목 입력"
          className="border-2 border-black"
        />
        <textarea name="content" className="border-2 border-black"></textarea>
        <input type="submit" value="등록" />
      </form>
    </>
  );
}
