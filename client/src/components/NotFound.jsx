import notFound from "../statics/404.svg";
import { PageNotFound, TopNotFound, LinkBack, Content } from "../styles/NotFound";
import { BackBtn } from "../styles/CardDetail";

export default function NotFound() {
  return (
    <PageNotFound>
      <Content>
        <LinkBack to="/home">
          <BackBtn/>
        </LinkBack>
        <div>
          <img src={notFound} alt="Page Not found" />
        </div>
        <TopNotFound>
          <h2>Page Not Found</h2>
        </TopNotFound>
      </Content>
    </PageNotFound>
  );
}
