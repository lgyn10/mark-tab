import { styled } from 'styled-components';

const ApiTest = () => {
  //! get() API 요청
  const getTreeApi = async () => {
    const response = await chrome.bookmarks.getTree();
    console.log(response);
    return response;
  };

  const getApi = async (id: number) => {
    const response = await chrome.bookmarks.get(id.toString());
    console.log(response);
    return response;
  };
  const getSubTreeApi = async (id: number) => {
    const response = await chrome.bookmarks.getSubTree(id.toString());
    console.log(response);
    return response;
  };
  const getChildrenApi = async (id: number) => {
    const response = await chrome.bookmarks.getChildren(id.toString());
    console.log(response);
    return response;
  };

  return (
    <ApiTestStyled>
      <div className='container'>
        <div className='api'>
          <button onClick={getTreeApi}>
            <h3>getTree() API 요청</h3>
          </button>
        </div>
        <div className='api'>
          <button onClick={() => getApi(726)}>
            <h3>get() API 요청</h3>
          </button>
        </div>
        <div className='api'>
          <button onClick={() => getSubTreeApi(726)}>
            <h3>getSubTree() API 요청</h3>
          </button>
        </div>
        <div className='api'>
          <button onClick={() => getChildrenApi(726)}>
            <h3>getChildren() API 요청 - mark-tab</h3>
          </button>
        </div>
        <div className='api'>
          <button onClick={() => getChildrenApi(13)}>
            <h3>getChildren() API 요청 - coding</h3>
          </button>
        </div>
      </div>
    </ApiTestStyled>
  );
};

export default ApiTest;

const ApiTestStyled = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  color: white;
  .api {
    :hover {
      background-color: red;
    }
  }

  button {
    padding: 1rem !important;
    border: 2px solid white;
  }
`;
