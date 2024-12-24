//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//
//       bebopc version:
//           3.1.3
//
//
//       bebopc source:
//           https://github.com/betwixt-labs/bebop
//
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
import { BebopView, BebopRuntimeError, BebopRecord, BebopJson, BebopTypeGuard, Guid, GuidMap } from "bebop";

export const BEBOP_SCHEMA = new Uint8Array ([
3, 5, 0, 0, 0, 67, 111, 109, 109, 97, 110, 100, 84, 121,
112, 101, 0, 4, 0, 251, 255, 255, 255, 0, 4, 0, 0, 0, 9,
69, 82, 82, 79, 82, 0, 0, 1, 0, 0, 0, 72, 69, 76, 76, 79,
0, 0, 2, 0, 0, 0, 83, 69, 83, 83, 73, 79, 78, 95, 67, 82,
69, 65, 84, 69, 0, 0, 3, 0, 0, 0, 83, 69, 83, 83, 73, 79,
78, 95, 68, 69, 76, 69, 84, 69, 0, 0, 4, 0, 0, 0, 83, 69,
83, 83, 73, 79, 78, 95, 74, 79, 73, 78, 0, 0, 5, 0, 0, 0,
83, 69, 83, 83, 73, 79, 78, 95, 76, 69, 65, 86, 69, 0, 0,
6, 0, 0, 0, 83, 69, 83, 83, 73, 79, 78, 95, 71, 69, 84, 0,
0, 7, 0, 0, 0, 83, 69, 83, 83, 73, 79, 78, 95, 73, 78, 70,
79, 0, 0, 8, 0, 0, 0, 83, 79, 78, 71, 95, 86, 69, 82, 83,
69, 0, 0, 9, 0, 0, 0, 85, 115, 101, 114, 0, 2, 0, 5, 0, 0,
0, 2, 110, 97, 109, 101, 0, 245, 255, 255, 255, 0, 1, 117,
105, 100, 0, 245, 255, 255, 255, 0, 2, 83, 101, 115, 115,
105, 111, 110, 0, 2, 0, 5, 0, 0, 0, 4, 105, 100, 0, 245,
255, 255, 255, 0, 1, 110, 97, 109, 101, 0, 245, 255, 255,
255, 0, 2, 111, 119, 110, 101, 114, 0, 1, 0, 0, 0, 0, 3,
117, 115, 101, 114, 115, 0, 242, 255, 255, 255, 0, 1, 0,
0, 0, 0, 4, 83, 111, 110, 103, 86, 101, 114, 115, 101, 0,
2, 0, 5, 0, 0, 0, 2, 115, 111, 110, 103, 72, 97, 115, 104,
0, 245, 255, 255, 255, 0, 1, 118, 101, 114, 115, 101, 73,
100, 120, 0, 254, 255, 255, 255, 0, 2, 67, 111, 109, 109,
97, 110, 100, 0, 2, 0, 5, 0, 0, 0, 4, 116, 121, 112, 101,
0, 0, 0, 0, 0, 0, 1, 117, 115, 101, 114, 0, 1, 0, 0, 0, 0,
2, 115, 101, 115, 115, 105, 111, 110, 0, 2, 0, 0, 0, 0, 3,
115, 111, 110, 103, 86, 101, 114, 115, 101, 0, 3, 0, 0, 0,
0, 4, 0, 0, 0, 0
]);

export enum CommandType {

  Error = 1,

  Hello = 2,

  SessionCreate = 3,

  SessionDelete = 4,

  SessionJoin = 5,

  SessionLeave = 6,

  SessionGet = 7,

  SessionInfo = 8,

  SongVerse = 9,
}


export interface IUser extends BebopRecord {

  name?: string;

  uid?: string;
}

export class User implements IUser {
  public name?: string;
  public uid?: string;

  constructor(record: IUser) {
    this.name = record.name;
    this.uid = record.uid;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public stringify(): string {
    return User.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IUser): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    User.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link User}.
   */
  public static validateCompatibility(record: IUser): void {
    if (record.name !== undefined) {
      BebopTypeGuard.ensureString(record.name)
    }
    if (record.uid !== undefined) {
      BebopTypeGuard.ensureString(record.uid)
    }
  }

  /**
   * Unsafely creates an instance of {@link User} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IUser {
      return new User(record);
  }

  /**
   * Creates a new {@link User} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IUser {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`User.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    User.validateCompatibility(parsed);
    return User.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return User.encode(this);
  }

  public static encode(record: IUser): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    User.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IUser, view: BebopView): number {
    const before = view.length;
    const pos = view.reserveMessageLength();
    const start = view.length;
    if (record.name !== undefined) {
      view.writeByte(1);
      view.writeString(record.name);
    }
    if (record.uid !== undefined) {
      view.writeByte(2);
      view.writeString(record.uid);
    }
    view.writeByte(0);
    const end = view.length;
    view.fillMessageLength(pos, end - start);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IUser {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return User.readFrom(view);
  }

  public static readFrom(view: BebopView): IUser {
    let message: IUser = {};
    const length = view.readMessageLength();
    const end = view.index + length;
    while (true) {
      switch (view.readByte()) {
        case 0:
          return new User(message);

        case 1:
          message.name = view.readString();
          break;

        case 2:
          message.uid = view.readString();
          break;

        default:
          view.index = end;
          return new User(message);
      }
    }
  }
}


export interface ISession extends BebopRecord {

  id?: string;

  name?: string;

  owner?: IUser;

  users?: Array<IUser>;
}

export class Session implements ISession {
  public id?: string;
  public name?: string;
  public owner?: IUser;
  public users?: Array<IUser>;

  constructor(record: ISession) {
    this.id = record.id;
    this.name = record.name;
    this.owner = record.owner;
    this.users = record.users;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public stringify(): string {
    return Session.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: ISession): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    Session.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link Session}.
   */
  public static validateCompatibility(record: ISession): void {
    if (record.id !== undefined) {
      BebopTypeGuard.ensureString(record.id)
    }
    if (record.name !== undefined) {
      BebopTypeGuard.ensureString(record.name)
    }
    if (record.owner !== undefined) {
      User.validateCompatibility(record.owner);
    }
    if (record.users !== undefined) {
      BebopTypeGuard.ensureArray(record.users, User.validateCompatibility);
    }
  }

  /**
   * Unsafely creates an instance of {@link Session} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): ISession {
      if (record.owner !== undefined) {
        record.owner = User.unsafeCast(record.owner);
      }
      return new Session(record);
  }

  /**
   * Creates a new {@link Session} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): ISession {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`Session.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    Session.validateCompatibility(parsed);
    return Session.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return Session.encode(this);
  }

  public static encode(record: ISession): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    Session.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: ISession, view: BebopView): number {
    const before = view.length;
    const pos = view.reserveMessageLength();
    const start = view.length;
    if (record.id !== undefined) {
      view.writeByte(1);
      view.writeString(record.id);
    }
    if (record.name !== undefined) {
      view.writeByte(2);
      view.writeString(record.name);
    }
    if (record.owner !== undefined) {
      view.writeByte(3);
      User.encodeInto(record.owner, view)
    }
    if (record.users !== undefined) {
      view.writeByte(4);
      {
      const length0 = record.users.length;
      view.writeUint32(length0);
      for (let i0 = 0; i0 < length0; i0++) {
        User.encodeInto(record.users[i0], view)
      }
    }
    }
    view.writeByte(0);
    const end = view.length;
    view.fillMessageLength(pos, end - start);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): ISession {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return Session.readFrom(view);
  }

  public static readFrom(view: BebopView): ISession {
    let message: ISession = {};
    const length = view.readMessageLength();
    const end = view.index + length;
    while (true) {
      switch (view.readByte()) {
        case 0:
          return new Session(message);

        case 1:
          message.id = view.readString();
          break;

        case 2:
          message.name = view.readString();
          break;

        case 3:
          message.owner = User.readFrom(view);
          break;

        case 4:
          {
        let length0 = view.readUint32();
        message.users = new Array<IUser>(length0);
        for (let i0 = 0; i0 < length0; i0++) {
          let x0: IUser;
          x0 = User.readFrom(view);
          message.users[i0] = x0;
        }
      }
          break;

        default:
          view.index = end;
          return new Session(message);
      }
    }
  }
}


export interface ISongVerse extends BebopRecord {

  songHash?: string;

  verseIdx?: number;
}

export class SongVerse implements ISongVerse {
  public songHash?: string;
  public verseIdx?: number;

  constructor(record: ISongVerse) {
    this.songHash = record.songHash;
    this.verseIdx = record.verseIdx;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public stringify(): string {
    return SongVerse.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: ISongVerse): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    SongVerse.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link SongVerse}.
   */
  public static validateCompatibility(record: ISongVerse): void {
    if (record.songHash !== undefined) {
      BebopTypeGuard.ensureString(record.songHash)
    }
    if (record.verseIdx !== undefined) {
      BebopTypeGuard.ensureUint8(record.verseIdx)
    }
  }

  /**
   * Unsafely creates an instance of {@link SongVerse} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): ISongVerse {
      return new SongVerse(record);
  }

  /**
   * Creates a new {@link SongVerse} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): ISongVerse {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`SongVerse.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    SongVerse.validateCompatibility(parsed);
    return SongVerse.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return SongVerse.encode(this);
  }

  public static encode(record: ISongVerse): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    SongVerse.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: ISongVerse, view: BebopView): number {
    const before = view.length;
    const pos = view.reserveMessageLength();
    const start = view.length;
    if (record.songHash !== undefined) {
      view.writeByte(1);
      view.writeString(record.songHash);
    }
    if (record.verseIdx !== undefined) {
      view.writeByte(2);
      view.writeByte(record.verseIdx);
    }
    view.writeByte(0);
    const end = view.length;
    view.fillMessageLength(pos, end - start);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): ISongVerse {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return SongVerse.readFrom(view);
  }

  public static readFrom(view: BebopView): ISongVerse {
    let message: ISongVerse = {};
    const length = view.readMessageLength();
    const end = view.index + length;
    while (true) {
      switch (view.readByte()) {
        case 0:
          return new SongVerse(message);

        case 1:
          message.songHash = view.readString();
          break;

        case 2:
          message.verseIdx = view.readByte();
          break;

        default:
          view.index = end;
          return new SongVerse(message);
      }
    }
  }
}


export interface ICommand extends BebopRecord {

  type?: CommandType;

  user?: IUser;

  session?: ISession;

  songVerse?: ISongVerse;
}

export class Command implements ICommand {
  public type?: CommandType;
  public user?: IUser;
  public session?: ISession;
  public songVerse?: ISongVerse;

  constructor(record: ICommand) {
    this.type = record.type;
    this.user = record.user;
    this.session = record.session;
    this.songVerse = record.songVerse;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public stringify(): string {
    return Command.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: ICommand): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    Command.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link Command}.
   */
  public static validateCompatibility(record: ICommand): void {
    if (record.type !== undefined) {
      BebopTypeGuard.ensureEnum(record.type, CommandType);
    }
    if (record.user !== undefined) {
      User.validateCompatibility(record.user);
    }
    if (record.session !== undefined) {
      Session.validateCompatibility(record.session);
    }
    if (record.songVerse !== undefined) {
      SongVerse.validateCompatibility(record.songVerse);
    }
  }

  /**
   * Unsafely creates an instance of {@link Command} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): ICommand {
      if (record.user !== undefined) {
        record.user = User.unsafeCast(record.user);
      }
      if (record.session !== undefined) {
        record.session = Session.unsafeCast(record.session);
      }
      if (record.songVerse !== undefined) {
        record.songVerse = SongVerse.unsafeCast(record.songVerse);
      }
      return new Command(record);
  }

  /**
   * Creates a new {@link Command} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): ICommand {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`Command.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    Command.validateCompatibility(parsed);
    return Command.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return Command.encode(this);
  }

  public static encode(record: ICommand): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    Command.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: ICommand, view: BebopView): number {
    const before = view.length;
    const pos = view.reserveMessageLength();
    const start = view.length;
    if (record.type !== undefined) {
      view.writeByte(1);
      view.writeUint32(record.type);
    }
    if (record.user !== undefined) {
      view.writeByte(2);
      User.encodeInto(record.user, view)
    }
    if (record.session !== undefined) {
      view.writeByte(3);
      Session.encodeInto(record.session, view)
    }
    if (record.songVerse !== undefined) {
      view.writeByte(4);
      SongVerse.encodeInto(record.songVerse, view)
    }
    view.writeByte(0);
    const end = view.length;
    view.fillMessageLength(pos, end - start);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): ICommand {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return Command.readFrom(view);
  }

  public static readFrom(view: BebopView): ICommand {
    let message: ICommand = {};
    const length = view.readMessageLength();
    const end = view.index + length;
    while (true) {
      switch (view.readByte()) {
        case 0:
          return new Command(message);

        case 1:
          message.type = view.readUint32() as CommandType;
          break;

        case 2:
          message.user = User.readFrom(view);
          break;

        case 3:
          message.session = Session.readFrom(view);
          break;

        case 4:
          message.songVerse = SongVerse.readFrom(view);
          break;

        default:
          view.index = end;
          return new Command(message);
      }
    }
  }
}

