import { useMemo } from 'react'
import fuzzysort from 'fuzzysort'
import Result = Fuzzysort.Result

const SEARCH_THRESHOLD = -100
const SEARCH_LIMIT = 100

export const useSearch = (searchValue: string, options: string[]): string[] => {
  return useMemo<string[]>(() => {
    // getting fuzzy search results
    const results = fuzzysort.go(searchValue, options, {
      threshold: SEARCH_THRESHOLD,
      limit: SEARCH_LIMIT,
      allowTypo: true
    })

    // highlighting them with <strong />
    return results.map(result =>
      fuzzysort.highlight(
        fuzzysort.single(searchValue, result.target) as Result,
        '<strong>',
        '</strong>'
      ) || ''
    )
  }, [searchValue, options])
}
