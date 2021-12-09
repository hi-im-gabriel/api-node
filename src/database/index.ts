import {
    Connection,
    createConnection,
    getConnectionOptions
} from 'typeorm';

export default async (): Promise < Connection > => {
    const defaultOption = await getConnectionOptions();
    return createConnection(
        Object.assign(defaultOption, {
            database: defaultOption.database
        })
    )
}