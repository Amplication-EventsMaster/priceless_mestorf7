/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Follow } from "./Follow";
import { FollowCountArgs } from "./FollowCountArgs";
import { FollowFindManyArgs } from "./FollowFindManyArgs";
import { FollowFindUniqueArgs } from "./FollowFindUniqueArgs";
import { CreateFollowArgs } from "./CreateFollowArgs";
import { UpdateFollowArgs } from "./UpdateFollowArgs";
import { DeleteFollowArgs } from "./DeleteFollowArgs";
import { User } from "../../user/base/User";
import { FollowService } from "../follow.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Follow)
export class FollowResolverBase {
  constructor(
    protected readonly service: FollowService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Follow",
    action: "read",
    possession: "any",
  })
  async _followsMeta(
    @graphql.Args() args: FollowCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Follow])
  @nestAccessControl.UseRoles({
    resource: "Follow",
    action: "read",
    possession: "any",
  })
  async follows(@graphql.Args() args: FollowFindManyArgs): Promise<Follow[]> {
    return this.service.follows(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Follow, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Follow",
    action: "read",
    possession: "own",
  })
  async follow(
    @graphql.Args() args: FollowFindUniqueArgs
  ): Promise<Follow | null> {
    const result = await this.service.follow(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Follow)
  @nestAccessControl.UseRoles({
    resource: "Follow",
    action: "create",
    possession: "any",
  })
  async createFollow(@graphql.Args() args: CreateFollowArgs): Promise<Follow> {
    return await this.service.createFollow({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Follow)
  @nestAccessControl.UseRoles({
    resource: "Follow",
    action: "update",
    possession: "any",
  })
  async updateFollow(
    @graphql.Args() args: UpdateFollowArgs
  ): Promise<Follow | null> {
    try {
      return await this.service.updateFollow({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Follow)
  @nestAccessControl.UseRoles({
    resource: "Follow",
    action: "delete",
    possession: "any",
  })
  async deleteFollow(
    @graphql.Args() args: DeleteFollowArgs
  ): Promise<Follow | null> {
    try {
      return await this.service.deleteFollow(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Follow): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}