import React, { Component } from "react";
import axios from "axios";

class CreateArticle extends Component {
  state = {
    message: "",
    response: {}
  };

  onCreate = async e => {
    let response;
    e.preventDefault();
    debugger;
    try {
      response = await axios.post(
        "/articles",
        {
          article: {
            title: e.target.title.value,
            lead: e.target.lead.value,
            content: e.target.content.value,
            category: e.target.category.value
          }
        },
        { headers: { "Content-Type": "application/json" } }
      );
      return this.setState({ message: response.message })
    } catch (error) {
      return this.setState({ message: response.error })
    }
  };

  render() {
    return (
      <>
        <form id="new-article-form" onSubmit={this.onCreate}>
          Title <input id="title" placeholder="title" key="title" />
          Lead
          <input id="lead" placeholder="lead" key="lead" />
          Content
          <textarea id="content" placeholder="content" key="content" />
          <select id="category-selector" key="category">
            <option value="latest_news">Latest News</option>
            <option value="tech">Tech</option>
            <option value="food">Food</option>
            <option value="sports">Sports</option>
            <option value="culture">Culture</option>
          </select>
          <button id="create-article-button" type="submit">
            Create Article
          </button>
        </form>
        <p>{this.state.message}</p>
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createArticle: bindActionCreators(createArticle, dispatch)
//   };
// };

// CreateArticle.PropTypes = {
//   onSubmitHandler: PropTypes
// }

export default CreateArticle;
