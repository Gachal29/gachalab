
export interface IOrganizations {
  name: string
  position: string
  url?: string
}

export interface Accounts {
  twitter?: string
  github?: string
}

export class Mydata {
  constructor (
    public firstName?: string,
    public lastName?: string,
    public firstNameJa?: string,
    public lastNameJa?: string,
    public firstNameKana?: string,
    public lastNameKana?: string,
    public email?: string,
    public accounts?: Accounts,
    public job?: string,
    public organizations?: Array<IOrganizations>,
    public history?: Array<any>,
    public skills?: Array<any>,
    public developed?: Array<any>,
    public library?: Array<any>
  ) {}

  static fromJSON(jsonData: string): Mydata {
    const parsedData = JSON.parse(jsonData)
    return new Mydata(
      parsedData.first_name || null,
      parsedData.last_name || null,
      parsedData.first_name_ja || null,
      parsedData.last_name_ja || null,
      parsedData.first_name_kana || null,
      parsedData.last_name_kana || null,
      parsedData.email || null,
      parsedData.accounts || null,
      parsedData.job || null,
      parsedData.organizations || null,
      parsedData.history || null,
      parsedData.skills || null,
      parsedData.developed || null,
      parsedData.library || null
    )
  }
}
