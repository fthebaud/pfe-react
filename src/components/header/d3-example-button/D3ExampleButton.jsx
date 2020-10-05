import React from 'react';
import { string } from 'prop-types';
import CircleOutlineIcon from 'mdi-react/CircleOutlineIcon';

import { D3_EXAMPLE_ROUTE } from 'app/router/routes.const';
import LinkButton from 'components/header/link-button/LinkButton';

const D3ExampleButton = ({ currentPage }) => (
    <LinkButton
        label="D3 Example"
        to={D3_EXAMPLE_ROUTE}
        isSelected={currentPage === D3_EXAMPLE_ROUTE}
    >
        <CircleOutlineIcon />
    </LinkButton>
);

D3ExampleButton.propTypes = {
    currentPage: string.isRequired,
};

export default D3ExampleButton;
