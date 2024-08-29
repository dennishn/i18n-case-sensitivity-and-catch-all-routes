import Link from "next/link";

export const Navigation = () => (
  <nav style={{ display: "flex", gap: "1rem" }}>
    <Link href={"/"}>
      go to <code>/</code>
    </Link>
    <Link href={"/foo"}>
      go to <code>/foo</code> <small>catch all route</small>
    </Link>
    <Link href={"/foo/bar/baz"}>
      go to <code>/foo/bar/baz</code> <small>catch all route</small>
    </Link>
    <Link href={"/optional-catch-all"}>
      go to <code>/optional-catch-all</code>{" "}
      <small>optional catch all route</small>
    </Link>
    <Link href={"/optional-catch-all/foo/bar/baz"}>
      go to <code>/optional-catch-all/foo/bar/baz</code>{" "}
      <small>optional catch all route</small>
    </Link>
  </nav>
);
