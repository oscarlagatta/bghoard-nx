import { BrowserRouter, Route } from 'react-router-dom';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ReviewFeatureList } from '@bghoard/review/feature-list';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ReviewFeatureDetails } from '@bghoard/review/feature-details';

export const App = () => {
  return (
    <BrowserRouter basename="/review">
      <h1 style={{ textAlign: 'center' }}>Board Game Hoard: Review</h1>
      <Route exact path="/" render={() => <ReviewFeatureList />} />
      <Route
        path="/:game"
        render={({ match }) => (
          <ReviewFeatureDetails gameId={match.params.game} />
        )}
      />
    </BrowserRouter>
  );
};

export default App;
