import useStatsNumber from "./useStatsNumber";
import useGetAllResponses from "./useGetAllResponses";
import useGetSurvey from "./useGetSurvery";

const useDashboardHome = () => {
  const {
    totalUsers,
    isPending: usersPending,
    isError: usersError,
    refetch: usersRefetch,
  } = useStatsNumber();

  const {
    draftSurveys,
    publishedSurveys,
    totalSurveys,
    surveys,
    isPending: surveysPending,
    isError: surveysError,
    refetch: surveysRefetch,
  } = useGetSurvey();

  const {
    responses,
    totalResponses,
    isPending: responsesPending,
    isError: responsesError,
    refetch: responsesRefetch,
  } = useGetAllResponses();

  const isPending = usersPending || surveysPending || responsesPending;

  const isError = usersError || surveysError || responsesError;

  const retry = () => {
    if (usersError) usersRefetch();
    if (surveysError) surveysRefetch();
    if (responsesError) responsesRefetch();
  };

  const stats = {
    totalSurveys,
    draftSurveys,
    publishedSurveys,
    responses: totalResponses,
    totalUsers,
  };

  return {
    stats,
    surveys,
    responses,
    isPending,
    isError,
    errors: {
      surveys: surveysError,
      responses: responsesError,
      users: usersError,
    },
    retry,
  };
};

export default useDashboardHome;
