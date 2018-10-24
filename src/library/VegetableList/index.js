import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import Button from 'react-rainbow-components/components/Button';
import Card from 'react-rainbow-components/components/Card';
import ShareIcon from './shareIcon';
import './styles.css';

function CardItems({ results }) {
    return results.map(({ data, id }) => (
        <Card
            className="prismic-cms-card-item"
            key={id}
            actions={(
                <ButtonIcon
                    variant="border-filled"
                    icon={<ShareIcon />}
                />
            )}
            footer={(
                <div className="prismic-cms-card-item_content">
                    <h1 className="prismic-cms-card-item_header">{data.name[0].text}</h1>
                    <p className="prismic-cms-card-item_description">{data.description[0].text}</p>
                    <Button
                        className="prismic-cms-card-item_button"
                        variant="outline-brand"
                        label="More"
                    />
                </div>
            )}
        >
            <div className="prismic-cms-card-item_img-container">
                <img src={data.image.url} alt="" />
            </div>
        </Card>
    ));
}

export default function VegetableList(props) {
    const { className, style, response } = props;

    const getContainerClassNames = () => classnames('prismic-cms-card_content', className);

    if (response && Array.isArray(response.results)) {
        return (
            <div className={getContainerClassNames()} style={style}>
                <CardItems results={response.results} />
            </div>
        );
    }
    return null;
}

VegetableList.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    response: PropTypes.object,
};

VegetableList.defaultProps = {
    className: undefined,
    style: undefined,
    response: null,
};
