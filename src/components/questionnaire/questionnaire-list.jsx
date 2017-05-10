import React from 'react';
import PropTypes from 'prop-types';

import Logger from 'utils/logger/logger';
import QuestionnaireListItem from './questionnaire-list-item';

const logger = new Logger('QuestionnaireList', 'Components');

function QuestionnaireList({ questionnaires }) {
  logger.debug('Rendering QuestionnaireList component.');

  const list = questionnaires.map(q => {
    return <QuestionnaireListItem key={q.id} label={q.label} />;
  });

  return (
    <div id="questionnaire-list">
      {questionnaires.length > 0
        ? <div>
            <div className="questionnaire-list_header">
              <div />
              <div>Mode de collecte</div>
              <div>Dernière mise à jour</div>
            </div>
            {list}
          </div>
        : <div className="questionnaire-list_noresults">Aucun questionnaire</div>}
    </div>
  );
}

QuestionnaireList.propTypes = {
  questionnaires: PropTypes.array,
};

QuestionnaireList.defaultProps = {
  questionnaires: [],
};

export default QuestionnaireList;
