import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@strapi/design-system/ThemeProvider';
import { lightTheme } from '@strapi/design-system/themes';
import EditSettingsView from '../index';

jest.mock('@strapi/helper-plugin', () => ({
  ...jest.requireActual('@strapi/helper-plugin'),
  // eslint-disable-next-line
  CheckPermissions: ({ children }) => <div>{children}</div>,
}));

describe('EditSettingsView', () => {
  it('should render correclty', () => {
    const history = createMemoryHistory();
    const mainLayout = {
      attributes: {
        id: { type: 'integer' },
        postal_code: { type: 'integer' },
      },
      kind: 'collectionType',
      layouts: {
        edit: [[{ name: 'postal_code', size: 6 }]],
        list: ['postal_code', 'categories'],
        editRelations: ['categories'],
      },
      metadatas: {
        id: { edit: {}, list: { label: 'id' } },
        postal_code: { edit: {}, list: { label: 'postal_code' } },
      },
      settings: { mainField: 'postal_code' },
      options: {},
      info: {
        description: 'the address',
        displayName: 'address',
        label: 'address',
        name: 'address',
      },
    };
    const components = {
      compo1: { uid: 'compo1' },
    };
    const { container } = render(
      <Router history={history}>
        <IntlProvider messages={{ en: {} }} textComponent="span" locale="en">
          <ThemeProvider theme={lightTheme}>
            <EditSettingsView
              mainLayout={mainLayout}
              components={components}
              isContentTypeView
              slug="api::address.address"
            />
          </ThemeProvider>
        </IntlProvider>
      </Router>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        outline: none;
      }

      .c1 {
        background: #f6f6f9;
        padding-top: 24px;
        padding-right: 56px;
        padding-bottom: 56px;
        padding-left: 56px;
      }

      .c2 {
        padding-bottom: 12px;
      }

      .c21 {
        padding-right: 56px;
        padding-left: 56px;
      }

      .c9 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c10 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c11 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.25;
        color: #32324d;
      }

      .c19 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #666687;
      }

      .c20 {
        font-size: 1rem;
        line-height: 1.5;
      }

      .c6 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #4945ff;
      }

      .c7 {
        font-weight: 600;
        line-height: 1.14;
      }

      .c8 {
        font-weight: 600;
        font-size: 0.6875rem;
        line-height: 1.45;
        text-transform: uppercase;
      }

      .c4 {
        padding-right: 8px;
      }

      .c3 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-transform: uppercase;
        -webkit-text-decoration: none;
        text-decoration: none;
        position: relative;
        outline: none;
      }

      .c3 svg path {
        fill: #4945ff;
      }

      .c3 svg {
        font-size: 0.625rem;
      }

      .c3:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c3:focus-visible {
        outline: none;
      }

      .c3:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .c18 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #32324d;
      }

      .c15 {
        padding-right: 8px;
      }

      .c12 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        outline: none;
      }

      .c12 svg {
        height: 12px;
        width: 12px;
      }

      .c12 svg > g,
      .c12 svg path {
        fill: #ffffff;
      }

      .c12[aria-disabled='true'] {
        pointer-events: none;
      }

      .c12:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c12:focus-visible {
        outline: none;
      }

      .c12:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c16 {
        height: 100%;
      }

      .c13 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 8px 16px;
        background: #4945ff;
        border: none;
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c13 .c14 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c13 .c17 {
        color: #ffffff;
      }

      .c13[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c13[aria-disabled='true'] .c17 {
        color: #666687;
      }

      .c13[aria-disabled='true'] svg > g,
      .c13[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c13[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c13[aria-disabled='true']:active .c17 {
        color: #666687;
      }

      .c13[aria-disabled='true']:active svg > g,
      .c13[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c13:hover {
        border: 1px solid #7b79ff;
        background: #7b79ff;
      }

      .c13:active {
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c71 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 8px 16px;
        background: #4945ff;
        border: none;
        border: 1px solid #d9d8ff;
        background: #f0f0ff;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
      }

      .c71 .c14 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c71 .c17 {
        color: #ffffff;
      }

      .c71[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c71[aria-disabled='true'] .c17 {
        color: #666687;
      }

      .c71[aria-disabled='true'] svg > g,
      .c71[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c71[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c71[aria-disabled='true']:active .c17 {
        color: #666687;
      }

      .c71[aria-disabled='true']:active svg > g,
      .c71[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c71:hover {
        background-color: #ffffff;
      }

      .c71:active {
        background-color: #ffffff;
        border: 1px solid #4945ff;
      }

      .c71:active .c17 {
        color: #4945ff;
      }

      .c71:active svg > g,
      .c71:active svg path {
        fill: #4945ff;
      }

      .c71 .c17 {
        color: #271fe0;
      }

      .c71 svg > g,
      .c71 svg path {
        fill: #271fe0;
      }

      .c22 {
        background: #ffffff;
        padding-top: 24px;
        padding-right: 32px;
        padding-bottom: 24px;
        padding-left: 32px;
        border-radius: 4px;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
      }

      .c40 {
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .c54 {
        padding: 16px;
        border-radius: 4px;
        border-style: dashed;
        border-width: 1px;
        border-color: #c0c0cf;
      }

      .c63 {
        overflow: hidden;
        width: 100%;
      }

      .c24 {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.25;
        color: #32324d;
      }

      .c46 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #32324d;
      }

      .c66 {
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #32324d;
      }

      .c47 {
        font-weight: 600;
        line-height: 1.14;
      }

      .c25 {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        gap: 0px;
      }

      .c43 {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        gap: 16px;
      }

      .c26 {
        grid-column: span 6;
      }

      .c44 {
        grid-column: span 8;
      }

      .c56 {
        grid-column: span 6;
      }

      .c72 {
        grid-column: span 4;
      }

      .c31 {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        background: transparent;
        border: none;
      }

      .c31:focus {
        outline: none;
      }

      .c31[aria-disabled='true'] {
        cursor: not-allowed;
      }

      .c28 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #32324d;
      }

      .c35 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #32324d;
      }

      .c39 {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #666687;
      }

      .c34 {
        padding-right: 16px;
        padding-left: 16px;
      }

      .c36 {
        padding-left: 12px;
      }

      .c29 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c32 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c27 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c27 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c27 > * + * {
        margin-top: 4px;
      }

      .c30 {
        position: relative;
        border: 1px solid #dcdce4;
        padding-right: 12px;
        border-radius: 4px;
        background: #ffffff;
        overflow: hidden;
        min-height: 2.5rem;
        outline: none;
        box-shadow: 0;
        -webkit-transition-property: border-color,box-shadow,fill;
        transition-property: border-color,box-shadow,fill;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
      }

      .c30:focus-within {
        border: 1px solid #4945ff;
        box-shadow: #4945ff 0px 0px 0px 2px;
      }

      .c37 {
        background: transparent;
        border: none;
        position: relative;
        z-index: 1;
      }

      .c37 svg {
        height: 0.6875rem;
        width: 0.6875rem;
      }

      .c37 svg path {
        fill: #666687;
      }

      .c38 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background: none;
        border: none;
      }

      .c38 svg {
        width: 0.375rem;
      }

      .c33 {
        width: 100%;
      }

      .c23 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c23 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c23 > * + * {
        margin-top: 16px;
      }

      .c55 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c55 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c55 > * + * {
        margin-top: 8px;
      }

      .c41 {
        background: #eaeaef;
      }

      .c42 {
        height: 1px;
        border: none;
        margin: 0;
      }

      .c57 {
        background: #f6f6f9;
        border-radius: 4px;
        border-color: #eaeaef;
        border: 1px solid #eaeaef;
        width: 100%;
        min-height: 32px;
      }

      .c59 {
        padding-right: 12px;
        padding-left: 12px;
      }

      .c64 {
        padding-left: 12px;
      }

      .c45 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c58 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: stretch;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
      }

      .c60 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c65 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: baseline;
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
      }

      .c67 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        outline: none;
      }

      .c67 svg {
        height: 12px;
        width: 12px;
      }

      .c67 svg > g,
      .c67 svg path {
        fill: #ffffff;
      }

      .c67[aria-disabled='true'] {
        pointer-events: none;
      }

      .c67:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c67:focus-visible {
        outline: none;
      }

      .c67:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c68 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
        border: none;
      }

      .c68 svg > g,
      .c68 svg path {
        fill: #8e8ea9;
      }

      .c68:hover svg > g,
      .c68:hover svg path {
        fill: #666687;
      }

      .c68:active svg > g,
      .c68:active svg path {
        fill: #a5a5ba;
      }

      .c68[aria-disabled='true'] {
        background-color: #eaeaef;
      }

      .c68[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c70 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .c69 {
        background-color: transparent;
      }

      .c62 {
        height: 0.75rem;
        width: 0.75rem;
      }

      .c62 path {
        fill: #666687;
      }

      .c61 {
        border-right: 1px solid #dcdce4;
      }

      .c53 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #32324d;
      }

      .c51 {
        padding-right: 8px;
      }

      .c48 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        outline: none;
      }

      .c48 svg {
        height: 12px;
        width: 12px;
      }

      .c48 svg > g,
      .c48 svg path {
        fill: #ffffff;
      }

      .c48[aria-disabled='true'] {
        pointer-events: none;
      }

      .c48:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c48:focus-visible {
        outline: none;
      }

      .c48:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c49 {
        padding: 8px 16px;
        background: #4945ff;
        border: none;
        border-radius: 4px;
        border: 1px solid #d9d8ff;
        background: #f0f0ff;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c49 .c50 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c49 .c52 {
        color: #ffffff;
      }

      .c49[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c49[aria-disabled='true'] .c52 {
        color: #666687;
      }

      .c49[aria-disabled='true'] svg > g,
      .c49[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c49[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c49[aria-disabled='true']:active .c52 {
        color: #666687;
      }

      .c49[aria-disabled='true']:active svg > g,
      .c49[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c49:hover {
        background-color: #ffffff;
      }

      .c49:active {
        background-color: #ffffff;
        border: 1px solid #4945ff;
      }

      .c49:active .c52 {
        color: #4945ff;
      }

      .c49:active svg > g,
      .c49:active svg path {
        fill: #4945ff;
      }

      .c49 .c52 {
        color: #271fe0;
      }

      .c49 svg > g,
      .c49 svg path {
        fill: #271fe0;
      }

      @media (max-width:68.75rem) {
        .c26 {
          grid-column: span 12;
        }
      }

      @media (max-width:34.375rem) {
        .c26 {
          grid-column: span;
        }
      }

      @media (max-width:68.75rem) {
        .c44 {
          grid-column: span 12;
        }
      }

      @media (max-width:34.375rem) {
        .c44 {
          grid-column: span;
        }
      }

      @media (max-width:68.75rem) {
        .c56 {
          grid-column: span;
        }
      }

      @media (max-width:34.375rem) {
        .c56 {
          grid-column: span;
        }
      }

      @media (max-width:68.75rem) {
        .c72 {
          grid-column: span 12;
        }
      }

      @media (max-width:34.375rem) {
        .c72 {
          grid-column: span;
        }
      }

      <main
        aria-labelledby="main-content-title"
        class="c0"
        id="main-content"
        tabindex="-1"
      >
        <div
          style="height: 0px;"
        >
          <div
            class="c1"
            data-strapi-header="true"
          >
            <div
              class="c2"
            >
              <a
                aria-current="page"
                class="c3 active"
                href="/"
              >
                <span
                  aria-hidden="true"
                  class="c4 c5"
                >
                  <svg
                    fill="none"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z"
                      fill="#212134"
                    />
                  </svg>
                </span>
                <span
                  class="c6 c7 c8"
                >
                  Go back
                </span>
              </a>
            </div>
            <div
              class="c9"
            >
              <div
                class="c10"
              >
                <h1
                  class="c11"
                  id="main-content-title"
                >
                  Configure the view - Address
                </h1>
              </div>
              <button
                aria-disabled="true"
                class="c12 c13"
                disabled=""
                type="submit"
              >
                <div
                  aria-hidden="true"
                  class="c14 c15 c16"
                >
                  <svg
                    fill="none"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.727 2.97a.2.2 0 01.286 0l2.85 2.89a.2.2 0 010 .28L9.554 20.854a.2.2 0 01-.285 0l-9.13-9.243a.2.2 0 010-.281l2.85-2.892a.2.2 0 01.284 0l6.14 6.209L20.726 2.97z"
                      fill="#212134"
                    />
                  </svg>
                </div>
                <span
                  class="c17 c18"
                >
                  Save
                </span>
              </button>
            </div>
            <p
              class="c19 c20"
            >
              Customize how the edit view will look like.
            </p>
          </div>
        </div>
        <div
          class="c21"
        >
          <div
            class="c22"
          >
            <div
              class="c23"
            >
              <h2
                class="c24"
              >
                Settings
              </h2>
              <div
                class="c25"
              >
                <div
                  class="c26"
                >
                  <div
                    class=""
                  >
                    <div>
                      <div
                        class="c27"
                      >
                        <span
                          class="c28"
                          for="select-1"
                          id="select-1-label"
                        >
                          Entry title
                        </span>
                        <div
                          class="c29 c30"
                        >
                          <button
                            aria-describedby="select-1-hint"
                            aria-disabled="false"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            aria-labelledby="select-1-label select-1-content"
                            class="c31"
                            id="select-1"
                            type="button"
                          />
                          <div
                            class="c32 c33"
                          >
                            <div
                              class="c29"
                            >
                              <div
                                class="c34"
                              >
                                <span
                                  class="c35"
                                  id="select-1-content"
                                >
                                  postal_code
                                </span>
                              </div>
                            </div>
                            <div
                              class="c29"
                            >
                              <button
                                aria-hidden="true"
                                class="c36 c37 c38"
                                tabindex="-1"
                                type="button"
                              >
                                <svg
                                  fill="none"
                                  height="1em"
                                  viewBox="0 0 14 8"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    d="M14 .889a.86.86 0 01-.26.625L7.615 7.736A.834.834 0 017 8a.834.834 0 01-.615-.264L.26 1.514A.861.861 0 010 .889c0-.24.087-.45.26-.625A.834.834 0 01.875 0h12.25c.237 0 .442.088.615.264a.86.86 0 01.26.625z"
                                    fill="#32324D"
                                    fill-rule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <p
                          class="c39"
                          id="select-1-hint"
                        >
                          Set the display field of your entry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="c40"
              >
                <hr
                  class="c41 c42"
                />
              </div>
              <h3
                class="c24"
              >
                View
              </h3>
              <div
                class="c43"
              >
                <div
                  class="c44"
                >
                  <div
                    class=""
                  >
                    <div
                      class="c23"
                    >
                      <div
                        class="c45"
                      >
                        <div>
                          <div
                            class=""
                          >
                            <span
                              class="c46 c47"
                            >
                              Displayed fields
                            </span>
                          </div>
                        </div>
                        <div>
                          <a
                            aria-disabled="false"
                            class="c48 c49"
                            href="/plugins/content-type-builder/content-types/api::address.address"
                            variant="secondary"
                          >
                            <div
                              aria-hidden="true"
                              class="c50 c51"
                            >
                              <svg
                                fill="none"
                                height="1em"
                                viewBox="0 0 24 24"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M23.605 3.514c.527.528.527 1.36 0 1.887l-2.623 2.607-4.99-4.99L18.6.396a1.322 1.322 0 011.887 0l3.119 3.118zM0 24v-4.989l14.2-14.2L19.19 9.8 4.99 24H0z"
                                  fill="#212134"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </div>
                            <span
                              class="c52 c53"
                            >
                              Edit the content type
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        class="c54"
                      >
                        <div
                          class="c55"
                        >
                          <div
                            class="c43"
                          >
                            <div
                              class="c56"
                            >
                              <div
                                class=""
                              >
                                <div
                                  class="c57 c58"
                                  width="100%"
                                >
                                  <div
                                    class="c59 c60 c61"
                                  >
                                    <svg
                                      class="c62"
                                      fill="none"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.563 5.587a2.503 2.503 0 100-5.007 2.503 2.503 0 000 5.007z"
                                        fill="#212134"
                                      />
                                      <path
                                        d="M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 01-2.184-.574A1.943 1.943 0 0114.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 011.606 1.9c.011.748 1.17.748 1.159 0A3.139 3.139 0 0017.566.17c-1.177-.423-2.568-.03-3.361.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006zM16.563 14.372a2.503 2.503 0 100-5.007 2.503 2.503 0 000 5.007z"
                                        fill="#212134"
                                      />
                                      <path
                                        d="M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 01-2.184-.574 1.943 1.943 0 01-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.159 0a3.139 3.139 0 00-2.08-2.914c-1.177-.423-2.568-.029-3.361.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005zM16.563 23.392a2.503 2.503 0 100-5.006 2.503 2.503 0 000 5.006z"
                                        fill="#212134"
                                      />
                                      <path
                                        d="M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.953 1.953 0 01-2.184-.574 1.943 1.943 0 01-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.159 0a3.138 3.138 0 00-2.08-2.914c-1.177-.423-2.568-.03-3.361.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005zM7.378 5.622a2.503 2.503 0 100-5.007 2.503 2.503 0 000 5.007z"
                                        fill="#212134"
                                      />
                                      <path
                                        d="M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 01-2.185-.574 1.943 1.943 0 01-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 011.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 008.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005zM7.378 14.406a2.503 2.503 0 100-5.006 2.503 2.503 0 000 5.006z"
                                        fill="#212134"
                                      />
                                      <path
                                        d="M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 01-2.185-.574 1.943 1.943 0 01-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 011.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 008.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006zM7.378 23.427a2.503 2.503 0 100-5.007 2.503 2.503 0 000 5.007z"
                                        fill="#212134"
                                      />
                                      <path
                                        d="M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 01-2.185-.574 1.943 1.943 0 01-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.138 3.138 0 008.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0z"
                                        fill="#212134"
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    class="c63"
                                    overflow="hidden"
                                    width="100%"
                                  >
                                    <div
                                      class="c64 c65"
                                    >
                                      <div
                                        class=""
                                      >
                                        <span
                                          class="c66"
                                        >
                                          postal_code
                                        </span>
                                      </div>
                                      <div
                                        class="c60"
                                      >
                                        <span>
                                          <button
                                            aria-disabled="false"
                                            aria-labelledby="tooltip-1"
                                            class="c67 c68 c69"
                                            tabindex="0"
                                            type="button"
                                          >
                                            <svg
                                              fill="none"
                                              height="1em"
                                              viewBox="0 0 24 24"
                                              width="1em"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                clip-rule="evenodd"
                                                d="M23.605 3.514c.527.528.527 1.36 0 1.887l-2.623 2.607-4.99-4.99L18.6.396a1.322 1.322 0 011.887 0l3.119 3.118zM0 24v-4.989l14.2-14.2L19.19 9.8 4.99 24H0z"
                                                fill="#212134"
                                                fill-rule="evenodd"
                                              />
                                            </svg>
                                          </button>
                                        </span>
                                        <span>
                                          <button
                                            aria-disabled="false"
                                            aria-labelledby="tooltip-3"
                                            class="c67 c68 c69"
                                            tabindex="0"
                                            type="button"
                                          >
                                            <svg
                                              fill="none"
                                              height="1em"
                                              viewBox="0 0 24 24"
                                              width="1em"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M3.236 6.149a.2.2 0 00-.197.233L6 24h12l2.96-17.618a.2.2 0 00-.196-.233H3.236zM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 01-.2.2H2.2a.2.2 0 01-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8z"
                                                fill="#32324D"
                                              />
                                            </svg>
                                          </button>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="c56"
                            >
                              <div
                                class=""
                              >
                                <div
                                  class="c70"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <button
                              aria-controls="label"
                              aria-disabled="true"
                              aria-expanded="false"
                              aria-haspopup="true"
                              class="c12 c71"
                              disabled=""
                              label="Insert another field"
                              type="button"
                            >
                              <div
                                aria-hidden="true"
                                class="c14 c15 c16"
                              >
                                <svg
                                  fill="none"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M24 13.604a.3.3 0 01-.3.3h-9.795V23.7a.3.3 0 01-.3.3h-3.21a.3.3 0 01-.3-.3v-9.795H.3a.3.3 0 01-.3-.3v-3.21a.3.3 0 01.3-.3h9.795V.3a.3.3 0 01.3-.3h3.21a.3.3 0 01.3.3v9.795H23.7a.3.3 0 01.3.3v3.21z"
                                    fill="#212134"
                                  />
                                </svg>
                              </div>
                              <span
                                class="c17 c18"
                              >
                                Insert another field
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="c72"
                >
                  <div
                    class=""
                  >
                    <div
                      class="c23"
                    >
                      <div>
                        <div
                          class=""
                        >
                          <span
                            class="c46 c47"
                          >
                            Relational fields
                          </span>
                        </div>
                      </div>
                      <div
                        class="c54"
                      >
                        <div
                          class="c55"
                        >
                          <div
                            class="c57 c58"
                            width="100%"
                          >
                            <div
                              class="c59 c60 c61"
                            >
                              <svg
                                class="c62"
                                fill="none"
                                height="1em"
                                viewBox="0 0 24 24"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.563 5.587a2.503 2.503 0 100-5.007 2.503 2.503 0 000 5.007z"
                                  fill="#212134"
                                />
                                <path
                                  d="M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 01-2.184-.574A1.943 1.943 0 0114.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 011.606 1.9c.011.748 1.17.748 1.159 0A3.139 3.139 0 0017.566.17c-1.177-.423-2.568-.03-3.361.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006zM16.563 14.372a2.503 2.503 0 100-5.007 2.503 2.503 0 000 5.007z"
                                  fill="#212134"
                                />
                                <path
                                  d="M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 01-2.184-.574 1.943 1.943 0 01-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.159 0a3.139 3.139 0 00-2.08-2.914c-1.177-.423-2.568-.029-3.361.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005zM16.563 23.392a2.503 2.503 0 100-5.006 2.503 2.503 0 000 5.006z"
                                  fill="#212134"
                                />
                                <path
                                  d="M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.953 1.953 0 01-2.184-.574 1.943 1.943 0 01-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.159 0a3.138 3.138 0 00-2.08-2.914c-1.177-.423-2.568-.03-3.361.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005zM7.378 5.622a2.503 2.503 0 100-5.007 2.503 2.503 0 000 5.007z"
                                  fill="#212134"
                                />
                                <path
                                  d="M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 01-2.185-.574 1.943 1.943 0 01-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 011.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 008.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005zM7.378 14.406a2.503 2.503 0 100-5.006 2.503 2.503 0 000 5.006z"
                                  fill="#212134"
                                />
                                <path
                                  d="M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 01-2.185-.574 1.943 1.943 0 01-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 011.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 008.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006zM7.378 23.427a2.503 2.503 0 100-5.007 2.503 2.503 0 000 5.007z"
                                  fill="#212134"
                                />
                                <path
                                  d="M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 01-2.185-.574 1.943 1.943 0 01-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.138 3.138 0 008.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0z"
                                  fill="#212134"
                                />
                              </svg>
                            </div>
                            <div
                              class="c63"
                              overflow="hidden"
                              width="100%"
                            >
                              <div
                                class="c64 c65"
                              >
                                <div
                                  class=""
                                >
                                  <span
                                    class="c66"
                                  >
                                    categories
                                  </span>
                                </div>
                                <div
                                  class="c60"
                                >
                                  <span>
                                    <button
                                      aria-disabled="false"
                                      aria-labelledby="tooltip-5"
                                      class="c67 c68 c69"
                                      tabindex="0"
                                      type="button"
                                    >
                                      <svg
                                        fill="none"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          clip-rule="evenodd"
                                          d="M23.605 3.514c.527.528.527 1.36 0 1.887l-2.623 2.607-4.99-4.99L18.6.396a1.322 1.322 0 011.887 0l3.119 3.118zM0 24v-4.989l14.2-14.2L19.19 9.8 4.99 24H0z"
                                          fill="#212134"
                                          fill-rule="evenodd"
                                        />
                                      </svg>
                                    </button>
                                  </span>
                                  <span>
                                    <button
                                      aria-disabled="false"
                                      aria-labelledby="tooltip-7"
                                      class="c67 c68 c69"
                                      tabindex="0"
                                      type="button"
                                    >
                                      <svg
                                        fill="none"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.236 6.149a.2.2 0 00-.197.233L6 24h12l2.96-17.618a.2.2 0 00-.196-.233H3.236zM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 01-.2.2H2.2a.2.2 0 01-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8z"
                                          fill="#32324D"
                                        />
                                      </svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button
                              aria-controls="label"
                              aria-disabled="true"
                              aria-expanded="false"
                              aria-haspopup="true"
                              class="c12 c71"
                              disabled=""
                              label="Insert another relational field"
                              type="button"
                            >
                              <div
                                aria-hidden="true"
                                class="c14 c15 c16"
                              >
                                <svg
                                  fill="none"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M24 13.604a.3.3 0 01-.3.3h-9.795V23.7a.3.3 0 01-.3.3h-3.21a.3.3 0 01-.3-.3v-9.795H.3a.3.3 0 01-.3-.3v-3.21a.3.3 0 01.3-.3h9.795V.3a.3.3 0 01.3-.3h3.21a.3.3 0 01.3.3v9.795H23.7a.3.3 0 01.3.3v3.21z"
                                    fill="#212134"
                                  />
                                </svg>
                              </div>
                              <span
                                class="c17 c18"
                              >
                                Insert another relational field
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    `);
  });
});
