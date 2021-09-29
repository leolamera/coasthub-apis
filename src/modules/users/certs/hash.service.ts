import * as bcrypt from 'bcrypt'

export class HashService {


    public async hashString(toHash: string): Promise<string> {
        const salt = await bcrypt.genSalt(6);
        return await bcrypt.hash(toHash, salt);
    }

    public async compareHash(hashedPassword: string, noHashedPassword: string): Promise<boolean> {
        const salt = await bcrypt.genSalt(6);
        return await bcrypt.compare(noHashedPassword, hashedPassword);
    }

}