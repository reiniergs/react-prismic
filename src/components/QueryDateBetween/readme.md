example:

    const value = {
        startDate: '2018-10-17',
        endDate: '2018-10-19',
    };

    <div>
        <GlobalHeader title="Publications between 2018-10-17 and 2018-10-19" />
        <Prismic repo="react-prismic-cms">
            <QueryDateBetween path="document.first_publication_date" value={value} component={ExampleCard} />
        </Prismic>
    </div>