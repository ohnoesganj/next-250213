"use client";

import { components } from "@/lib/backend/apiV1/schema";
import client from "@/lib/backend/client";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faBookBookmark, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ClinetLayout({
  children,
  me,
  fontVariable,
  fontClassName,
}: Readonly<{
  children: React.ReactNode;
  me: components["schemas"]["MemberDto"];
  fontVariable: string;
  fontClassName: string;
}>) {
  const isLogined = me.id !== 0;

  async function handleLogout(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const response = await client.DELETE("/api/v1/members/logout", {
      credentials: "include",
    });
    if (response.error) {
      alert(response.error.msg);
      return;
    }
    window.location.href = "/post/list";
  }

  return (
    <html lang="en" className={`${fontVariable}`}>
      <body className="min-h-[100dvh] flex flex-col ${fontClassName}">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="fa-fw text-4xl text-[red]"
        />
        <header className="flex justify-end gap-3 px-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FontAwesomeIcon icon={faHouse} />
              Home
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{me.nickname}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/">메인</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">소개</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/post/list">글 목록</Link>
              </DropdownMenuItem>
              {isLogined && (
                <DropdownMenuItem>
                  <Link href="/post/write">글 작성</Link>
                </DropdownMenuItem>
              )}
              {!isLogined && (
                <DropdownMenuItem>
                  <Link href="/member/login">로그인</Link>
                </DropdownMenuItem>
              )}
              {!isLogined && (
                <DropdownMenuItem>
                  <Link href="/member/join">회원 가입</Link>
                </DropdownMenuItem>
              )}
              {isLogined && (
                <DropdownMenuItem>
                  <Link href="" onClick={handleLogout}>
                    로그아웃
                  </Link>
                </DropdownMenuItem>
              )}
              {isLogined && (
                <DropdownMenuItem>
                  <Link href="/member/me">내정보</Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="flex-grow">{children}</div>
        <footer>푸터</footer>

        <input type="text" />
      </body>
    </html>
  );
}
