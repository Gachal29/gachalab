
export interface IOrganizations {
  name: string
  position: string
  url?: string
}

export interface Accounts {
  twitter?: string
  github?: string
}

export interface HistoryContent {
  year: number
  month?: number
  day?: number
  description: string
}

export interface Skill {
  category: string
  contents: Array<SkillContents>
}

export interface SkillContents {
  name: string
  description: string
}

export interface LibraryContent {
  date: string
  title: string
  url: string
  description?: string
}

export interface Birthday {
  year: number,
  month: number,
  day: number,
}

export class Mydata {
  constructor (
    public lastUpdate: string,
    public comment: string,
    public firstName?: string,
    public lastName?: string,
    public firstNameJa?: string,
    public lastNameJa?: string,
    public firstNameKana?: string,
    public lastNameKana?: string,
    public birthday?: Birthday,
    public email?: string,
    public accounts?: Accounts,
    public job?: string,
    public organizations?: Array<IOrganizations>,
    public history?: Array<HistoryContent>,
    public skills?: Array<Skill>,
    public developed?: Array<any>,
    public library?: Array<LibraryContent>,
  ) {}

  static fromJSON(jsonData: string): Mydata {
    const parsedData = JSON.parse(jsonData)
    return new Mydata(
      parsedData.last_update,
      parsedData.comment,
      parsedData.first_name || null,
      parsedData.last_name || null,
      parsedData.first_name_ja || null,
      parsedData.last_name_ja || null,
      parsedData.first_name_kana || null,
      parsedData.last_name_kana || null,
      parsedData.birthday || null,
      parsedData.email || null,
      parsedData.accounts || null,
      parsedData.job || null,
      parsedData.organizations || null,
      parsedData.history || null,
      parsedData.skills || null,
      parsedData.developed || null,
      parsedData.library || null,
    )
  }
}
