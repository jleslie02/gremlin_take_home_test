/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Loadable from 'react-loadable';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

const Search = props => {
  const { search, onSearch, isLoading, theme } = props;

  // Define styles
  const classes = {
    search: css({
      position: 'relative'
    }),
    wrapper: css(
      (() => ({
        border: '0',
        borderBottom: '2px solid #e5e5e5',
        fontSize: '18px',
        lineHeight: '30px',
        minHeight: '50px',
        background: 'transparent',
        color: '#505050', // '#fbfbfb',
        outline: 'none',
        ...theme.mixins.placeholder('#979797', '18px'),
        margin: '0px',
        width: '100%',
        padding: '10px 30px'
      }))()
    ),

    buttonSearch: css(
      (() => ({
        position: 'absolute',
        height: '35px',
        right: '0',
        top: '17px',
        width: '80px',
        borderRadius: '10px',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        borderRight: 'none',
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems('center'),
        background: 'rgb(214, 156, 40)',
        ...theme.mixins.boxShadow('-2px 2px 4px #cac1bb'),
        cursor: 'pointer',
        '> i': {
          paddingLeft: '14px',
          color: '#ffffff',
          fontSize: '18px'
        },
        ':hover': {
          ...theme.mixins.boxShadow('-1px 0px 4px #cac1bb')
        }
      }))()
    )
  };

  // Search States
  const [query, setQuery] = useState('');
  // End Search States

  // Utilities functions
  const setSearch = () => {
    const canSearch = () => {
      return query !== '' && query !== search.q;
    };
    if (canSearch() && !isLoading) {
      const newSearch = { ...search, q: query };
      onSearch(newSearch);
    }
  };
  // const toggleOpen = () => setShowFilters(!showFilters);

  // End Utilities functions

  return (
    <div
      data-gm="search"
      className="search"
      css={classes.search}
    >
      <input
        css={classes.wrapper}
        type="text"
        value={query}
        placeholder="Search packages..."
        onChange={e => setQuery(e.target.value)}
      />
      <div css={classes.buttonSearch} onClick={setSearch}>
        <i className="fa fa-search" />
      </div>
    </div>
  );
};

export default withRouter(Search);
